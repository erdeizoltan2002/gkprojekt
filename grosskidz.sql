-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Már 17. 12:12
-- Kiszolgáló verziója: 10.4.27-MariaDB
-- PHP verzió: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `grosskidz`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `bejelentkezes`
--

CREATE TABLE `bejelentkezes` (
  `id` int(10) NOT NULL,
  `felhasznalo` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `jelszo` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `bejelentkezes`
--

INSERT INTO `bejelentkezes` (`id`, `felhasznalo`, `email`, `jelszo`) VALUES
(1, 'elso', 'valami2@gmail.com', '$2b$10$TUicsZHw0P.CCRWQpFt26OCeNcuxlWz1udYySsAEYtuMWXObQuvlW'),
(6, 'admin', 'admin@gmail.com', '$2b$10$WgHhkUka6C7CMhPNl3h83.AS/XcDxNJZ5z.oIxYOynlf6ouoHAVUi');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `blacklist`
--

CREATE TABLE `blacklist` (
  `id` int(11) NOT NULL,
  `token` varchar(1000) NOT NULL,
  `exp_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `nadragok`
--

CREATE TABLE `nadragok` (
  `id` int(10) NOT NULL,
  `kep` varchar(200) NOT NULL,
  `megnevezes` varchar(20) NOT NULL,
  `meret` varchar(20) NOT NULL,
  `osszeg` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `nadragok`
--

INSERT INTO `nadragok` (`id`, `kep`, `megnevezes`, `meret`, `osszeg`) VALUES
(1, 'grosskid.jpg', 'ex_jean', 'S', 6990),
(2, 'grosskid.jpg', 'ex_jean', 'M', 6990),
(3, 'grosskid.jpg', 'ex_jean', 'L', 7990),
(4, 'grosskid.jpg', 'ex_jean', 'XL', 8990);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `polok`
--

CREATE TABLE `polok` (
  `id` int(10) NOT NULL,
  `kep` varchar(200) NOT NULL,
  `megnevezes` varchar(20) NOT NULL,
  `meret` varchar(20) NOT NULL,
  `osszeg` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `polok`
--

INSERT INTO `polok` (`id`, `kep`, `megnevezes`, `meret`, `osszeg`) VALUES
(1, 'grosskid.jpg', 'ex_shirt', 'S', 6990),
(2, 'grosskid.jpg', 'ex_shirt', 'M', 7990),
(3, 'grosskid.jpg', 'ex_shirt', 'L', 8990),
(4, 'grosskid.jpg', 'ex_shirt', 'XL', 9990);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `puloverek`
--

CREATE TABLE `puloverek` (
  `id` int(10) NOT NULL,
  `kep` varchar(100) NOT NULL,
  `megnevezes` varchar(20) NOT NULL,
  `meret` varchar(20) NOT NULL,
  `osszeg` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `puloverek`
--

INSERT INTO `puloverek` (`id`, `kep`, `megnevezes`, `meret`, `osszeg`) VALUES
(1, 'grosskid.jpg', 'ex_hoodie', 'S', 8990),
(2, 'grosskid.jpg', 'ex_hoodie', 'M', 8990),
(3, 'grosskid.jpg', 'ex_hoodie', 'L', 10990),
(4, 'grosskid.jpg', 'ex_hoodie', 'XL', 10990);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `bejelentkezes`
--
ALTER TABLE `bejelentkezes`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `blacklist`
--
ALTER TABLE `blacklist`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `nadragok`
--
ALTER TABLE `nadragok`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `polok`
--
ALTER TABLE `polok`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `puloverek`
--
ALTER TABLE `puloverek`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `bejelentkezes`
--
ALTER TABLE `bejelentkezes`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `blacklist`
--
ALTER TABLE `blacklist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT a táblához `nadragok`
--
ALTER TABLE `nadragok`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `polok`
--
ALTER TABLE `polok`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `puloverek`
--
ALTER TABLE `puloverek`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
