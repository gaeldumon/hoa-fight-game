import { StoreGame } from './types/store';

export function getLocalStorage(): { games: StoreGame[] } {
    const data = localStorage.getItem('hoafight');
    if (data) return JSON.parse(data);
    return { games: [] };
}

export function setLocalStorage(games: StoreGame[]): void {
    localStorage.setItem('hoafight', JSON.stringify({ games }));
}

export function getUserRatio(user: 'user1' | 'user2'): number {
    const { games } = getLocalStorage();
    return Math.round((games.filter((game) => game.winner === user).length / games.length) * 100);
}
