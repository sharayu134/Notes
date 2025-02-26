CREATE TABLE IF NOT EXISTS public.saves
(
    save_id integer NOT NULL DEFAULT nextval('saves_save_id_seq'::regclass),
    user_id uuid NOT NULL,
    video_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    is_deleted boolean DEFAULT false,
    CONSTRAINT saves_pkey PRIMARY KEY (save_id),
    CONSTRAINT saves_user_id_video_id_key UNIQUE (user_id, video_id),
    CONSTRAINT saves_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES public.users (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT saves_video_id_fkey FOREIGN KEY (video_id)
        REFERENCES public.videos (video_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.saves
    OWNER to postgres;

-- Optional: Create sequence if it doesn't exist.
CREATE SEQUENCE IF NOT EXISTS saves_save_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE IF EXISTS saves_save_id_seq OWNER TO postgres;

#  if I delete user, video what will happen to this saves row? If I delete this row in saves what will happen to user and video





To understand what happens when you delete users, videos, or saves rows, it's crucial to look at the foreign key constraints defined in your `saves` table. Here's a breakdown:

**Understanding `ON DELETE CASCADE`**

* The `ON DELETE CASCADE` clause in a foreign key constraint means that when a row in the "parent" table (the table being referenced) is deleted, all corresponding rows in the "child" table (the table with the foreign key) are automatically deleted as well.

**Scenarios:**

1.  **Deleting a User:**
    * Because the `saves` table has a foreign key constraint `saves_user_id_fkey` with `ON DELETE CASCADE` referencing the `users` table, if you delete a row from the `users` table, all rows in the `saves` table that have that `user_id` will also be automatically deleted.
    * In other words, if a user is deleted, all their saved videos will also be removed from the `saves` table.

2.  **Deleting a Video:**
    * Similarly, the `saves` table has a foreign key constraint `saves_video_id_fkey` with `ON DELETE CASCADE` referencing the `videos` table.
    * Therefore, if you delete a row from the `videos` table, all rows in the `saves` table that have that `video_id` will be automatically deleted.
    * Meaning, if a video is deleted, all user's saves of that video will also be removed from the `saves` table.

3.  **Deleting a Row in `saves`:**
    * Deleting a row from the `saves` table itself will *not* affect the `users` or `videos` tables.
    * The `saves` table is the "child" table in the foreign key relationships. Deleting a child row does not trigger any actions in the parent tables.
    * So if a row is deleted from the saves table, only that saved video relationship for that user is deleted. The user and video records remain untouched.

**In summary:**

* `ON DELETE CASCADE` is designed to maintain referential integrity. It ensures that related data is consistently removed when a parent record is deleted.
* Deleting a row in the child table (saves) will not affect the parent tables(users, videos).
