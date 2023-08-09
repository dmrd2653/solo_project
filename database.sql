
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "travel_list" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(80) NOT NULL,
	"location" varchar(80) NOT NULL,
	"category" varchar(80) NOT NULL,
	"notes" varchar(120),	
	"user_id" integer REFERENCES "user" (id)
);

INSERT INTO "travel_list" (name, location, category, notes)
VALUES ('Musée du Louvre', 'Paris', 'art museum', 
'Mona Lisa by Leonardo da Vinci');
