import { TokenPrice } from "../service/price/syncPrice";
import logger from "../middleware/logger";
/**
 * Represents an item stored in the cache.
 * @template T The type of the value stored in the cache item.
 */
type CacheItem<T> = {
    value: T;
    timeoutId?: NodeJS.Timeout;
};

/**
 * Represents an in-memory cache that stores key-value pairs.
 * Supports adding, retrieving, deleting, and clearing items from the cache.
 * @template K The type of the cache keys.
 * @template V The type of the cache values.
 */
class InMemoryCache<K, V> {
    private cache: Map<K, CacheItem<V>> = new Map();

    /**
     * Sets a key-value pair in the cache.
     * 
     * @param key - The key to set in the cache.
     * @param value - The value to associate with the key.
     * @param timeoutMs - Optional. The time in milliseconds after which the item should be automatically removed from the cache.
     */
    set(key: K, value: V, timeoutMs?: number): void {
        const item: CacheItem<V> = { value };

        if (timeoutMs) {
            // Set a timeout to automatically remove the item after the specified time
            item.timeoutId = setTimeout(() => {
                logger.debug(`Cache item with key ${key} timed out and was removed from the cache.`);
                this.delete(key);
            }, timeoutMs);
        }

        this.cache.set(key, item);
    }


    /**
     * Retrieves the value associated with the specified key from the cache.
     * @param key - The key to retrieve the value for.
     * @returns The value associated with the key, or undefined if the key is not found in the cache.
     */
    get(key: K): V | undefined {
        const item = this.cache.get(key);
        return item?.value;
    }


    /**
     * Deletes an item from the cache based on the specified key.
     * If the item has a timeout, the timeout is cleared before deleting the item.
     * @param key - The key of the item to delete from the cache.
     */
    delete(key: K): void {
        const item = this.cache.get(key);

        if (item) {
            // Clear the timeout if it exists
            if (item.timeoutId) {
                clearTimeout(item.timeoutId);
            }

            this.cache.delete(key);
        }
    }

    /**
     * Clears the cache by removing all items and clearing any associated timeouts.
     */
    clear(): void {
        // Clear all timeouts
        this.cache.forEach((item) => {
            if (item.timeoutId) {
                clearTimeout(item.timeoutId);
            }
        });

        this.cache.clear();
    }
}

export const tokenCache = new InMemoryCache<string, (TokenPrice | null)[]>();