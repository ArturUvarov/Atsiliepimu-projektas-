CREATE TABLE `comment` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`bywhom` varchar(255) NOT NULL,
	`content` varchar(255) NOT NULL,
	`posted_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `comment_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `User` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`username` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`role` tinyint unsigned NOT NULL DEFAULT 1,
	`status` tinyint unsigned NOT NULL DEFAULT 1,
	CONSTRAINT `User_id` PRIMARY KEY(`id`),
	CONSTRAINT `User_email_unique` UNIQUE(`email`)
);
