
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "travel_list" (
	"id" integer PRIMARY KEY,
	"name" varchar(80) NOT NULL,
	"user_id" integer REFERENCES "user" (id)
);

CREATE TABLE "places" (
	"id" integer PRIMARY KEY,
	"name" varchar(80) NOT NULL,
	"location" varchar(80) NOT NULL,
	"category" varchar(80) NOT NULL,
	"notes" varchar(120),
	"list_id" integer REFERENCES "travel_list" (id)
);