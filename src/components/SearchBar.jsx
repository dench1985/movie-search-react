import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { headers } from "../tools";

export default function SearchBar({ set: setFilms }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [text, setText] = useState(searchParams.get("s") || "");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const initialQuery = useRef(searchParams.get("s") || "");

    const searchMovies = useCallback(async (query) => {
        const normalizedQuery = query.trim();
        if (!normalizedQuery) return;

        setLoading(true);
        setError("");

        try {
            const url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${encodeURIComponent(normalizedQuery)}&page=1`;
            const response = await fetch(url, headers);

            if (!response.ok) {
                throw new Error("Ошибка ответа сервера");
            }

            const data = await response.json();
            setSearchParams({ s: normalizedQuery });
            setFilms(data.films ?? []);
        } catch {
            setError("Не удалось загрузить фильмы. Попробуйте ещё раз.");
        } finally {
            setLoading(false);
        }
    }, [setFilms, setSearchParams]);

    useEffect(() => {
        if (initialQuery.current) {
            void searchMovies(initialQuery.current);
        }
    }, [searchMovies]);

    function handleSubmit(event) {
        event.preventDefault();
        void searchMovies(text);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    required
                    placeholder="Sherlock Holmes"
                />
                <button type="submit" disabled={loading} aria-label="Найти фильмы">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            d="M15.7372 14.4753L12.7159 11.463C13.6907 10.2211 14.2196 8.68756 14.2176 7.10882C14.2176 5.70283 13.8007 4.32841 13.0196 3.15937C12.2385 1.99033 11.1282 1.07918 9.82925 0.54113C8.53028 0.00308012 7.10094 -0.137698 5.72196 0.136597C4.34299 0.410893 3.07631 1.08794 2.08213 2.08213C1.08794 3.07631 0.410893 4.34299 0.136597 5.72196C-0.137698 7.10094 0.00308012 8.53028 0.54113 9.82925C1.07918 11.1282 1.99033 12.2385 3.15937 13.0196C4.32828 13.8006 5.70255 14.2175 7.1084 14.2176C8.68713 14.2196 10.2206 13.6907 11.4625 12.7159L14.4748 15.7372C14.5575 15.8204 14.6557 15.8865 14.764 15.9317C14.8723 15.9768 14.9884 16 15.1057 16C15.2231 16 15.3392 15.9768 15.4475 15.9317C15.5558 15.8865 15.654 15.8204 15.7367 15.7372C15.8199 15.6545 15.886 15.5563 15.9312 15.448C15.9763 15.3397 15.9995 15.2236 15.9995 15.1062C15.9995 14.9889 15.9763 14.8728 15.9312 14.7645C15.886 14.6562 15.8199 14.558 15.7372 14.4753ZM1.77721 7.10882C1.77721 6.05433 2.0899 5.02352 2.67575 4.14674C3.26159 3.26996 4.09428 2.58659 5.0685 2.18305C6.04273 1.77952 7.11474 1.67393 8.14897 1.87965C9.1832 2.08538 10.1332 2.59316 10.8788 3.3388C11.6245 4.08444 12.1323 5.03444 12.338 6.06868C12.5437 7.10291 12.4381 8.17492 12.0346 9.14914C11.6311 10.1234 10.9477 10.9561 10.0709 11.5419C9.19413 12.1277 8.16332 12.4404 7.10882 12.4404C5.69479 12.4404 4.33867 11.8787 3.3388 10.8788C2.33893 9.87897 1.77721 8.52285 1.77721 7.10882Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </form>
            {loading && <p>Загружаем фильмы...</p>}
            {error && <p role="alert">{error}</p>}
        </div>
    );
}
