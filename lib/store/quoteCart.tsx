"use client";

// ─────────────────────────────────────────────────────────────
//  HomzIndia — B2B Quote Cart Context
//  NOT an e-commerce cart. This is a quote/inquiry basket.
//  localStorage is accessed only inside useEffect to avoid
//  hydration mismatches.
// ─────────────────────────────────────────────────────────────

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

export interface QuoteItem {
  productId: string;
  name: string;
  category: string;
  segment: string;
  quantity: number;
  notes: string;
}

interface QuoteCartContextType {
  items: QuoteItem[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  addItem: (item: Omit<QuoteItem, "quantity" | "notes">) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  updateNotes: (productId: string, notes: string) => void;
  clearCart: () => void;
  isInCart: (productId: string) => boolean;
}

const QuoteCartContext = createContext<QuoteCartContextType | null>(null);

const STORAGE_KEY = "homz-quote-cart-v1";

export function QuoteCartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // ── Hydrate from localStorage after mount (avoids hydration mismatch) ──
  useEffect(() => {
    setIsMounted(true);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as QuoteItem[];
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      /* ignore */
    }
  }, []);

  // ── Persist to localStorage whenever items change ──
  useEffect(() => {
    if (!isMounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items, isMounted]);

  const addItem = useCallback(
    (item: Omit<QuoteItem, "quantity" | "notes">) => {
      setItems((prev) => {
        const exists = prev.find((i) => i.productId === item.productId);
        if (exists) {
          return prev.map((i) =>
            i.productId === item.productId
              ? { ...i, quantity: i.quantity + 1 }
              : i
          );
        }
        return [...prev, { ...item, quantity: 1, notes: "" }];
      });
    },
    []
  );

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const updateQuantity = useCallback(
    (productId: string, quantity: number) => {
      if (quantity < 1) {
        removeItem(productId);
        return;
      }
      setItems((prev) =>
        prev.map((i) => (i.productId === productId ? { ...i, quantity } : i))
      );
    },
    [removeItem]
  );

  const updateNotes = useCallback((productId: string, notes: string) => {
    setItems((prev) =>
      prev.map((i) => (i.productId === productId ? { ...i, notes } : i))
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const isInCart = useCallback(
    (productId: string) => items.some((i) => i.productId === productId),
    [items]
  );

  return (
    <QuoteCartContext.Provider
      value={{
        items,
        isOpen,
        setIsOpen,
        addItem,
        removeItem,
        updateQuantity,
        updateNotes,
        clearCart,
        isInCart,
      }}
    >
      {children}
    </QuoteCartContext.Provider>
  );
}

export function useQuoteCart(): QuoteCartContextType {
  const ctx = useContext(QuoteCartContext);
  if (!ctx) {
    throw new Error("useQuoteCart must be used within a QuoteCartProvider");
  }
  return ctx;
}
