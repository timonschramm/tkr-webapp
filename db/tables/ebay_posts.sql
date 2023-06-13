CREATE TABLE ebay_posts (
    -- id name/titel user_id preis / ort 
    id uuid DEFAULT gen_random_uuid(),
    titel text,
    preis float,
    ort text,
    user_id uuid,
    bild_link text,
    CONSTRAINT ebay_pkey PRIMARY KEY (id),
    CONSTRAINT fk_users FOREIGN KEY (user_id)
        REFERENCES users (id) MATCH SIMPLE
    UNIQUE (id)
)