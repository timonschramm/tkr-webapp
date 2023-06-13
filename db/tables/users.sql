CREATE TABLE users (
    id uuid,
    vorname text,
    nachname text,
    telefon text,
    addresse text,
    CONSTRAINT users_pkey(id),
    UNIQUE (id)
)