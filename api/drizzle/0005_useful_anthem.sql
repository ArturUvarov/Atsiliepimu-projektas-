CREATE TABLE `Comment` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`reviewId` int unsigned NOT NULL,
	`userId` int unsigned NOT NULL,
	`content` text,
	`date` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `Comment_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `Rate` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`reviewId` int unsigned NOT NULL,
	`userId` int unsigned NOT NULL,
	`rate` tinyint unsigned NOT NULL,
	CONSTRAINT `Rate_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `Reviews` MODIFY COLUMN `content` text;--> statement-breakpoint
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_reviewId_Reviews_id_fk` FOREIGN KEY (`reviewId`) REFERENCES `Reviews`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_userId_User_id_fk` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Rate` ADD CONSTRAINT `Rate_reviewId_Reviews_id_fk` FOREIGN KEY (`reviewId`) REFERENCES `Reviews`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Rate` ADD CONSTRAINT `Rate_userId_User_id_fk` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE no action ON UPDATE no action;