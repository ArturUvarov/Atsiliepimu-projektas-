CREATE TABLE `comment` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`posted_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `comment_id` PRIMARY KEY(`id`)
);
