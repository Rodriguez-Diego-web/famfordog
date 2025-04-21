import { useMemo } from 'react';

/**
 * Hook zum Memoizieren von Werten, um unnötige Neuberechnungen zu vermeiden
 * @param value Der zu memoizierende Wert
 * @param dependencies Die Abhängigkeiten, bei deren Änderung der Wert neu berechnet wird
 * @returns Der memoizierte Wert
 */
export function useMemoizedValue<T>(value: T, dependencies: React.DependencyList): T {
  return useMemo(() => value, dependencies);
}

/**
 * Hook zum Memoizieren von Filterergebnissen für Arrays
 * @param array Das zu filternde Array
 * @param filterFn Die Filterfunktion
 * @param dependencies Die Abhängigkeiten, bei deren Änderung das Filterergebnis neu berechnet wird
 * @returns Das gefilterte Array
 */
export function useMemoizedFilter<T>(
  array: T[],
  filterFn: (item: T) => boolean,
  dependencies: React.DependencyList
): T[] {
  return useMemo(() => array.filter(filterFn), dependencies);
}

/**
 * Hook zum Memoizieren von Sortierergebnissen für Arrays
 * @param array Das zu sortierende Array
 * @param sortFn Die Sortierfunktion
 * @param dependencies Die Abhängigkeiten, bei deren Änderung das Sortierergebnis neu berechnet wird
 * @returns Das sortierte Array
 */
export function useMemoizedSort<T>(
  array: T[],
  sortFn: (a: T, b: T) => number,
  dependencies: React.DependencyList
): T[] {
  return useMemo(() => [...array].sort(sortFn), dependencies);
}
