CREATE TABLE `Reviews` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`userId` int unsigned NOT NULL,
	`subjectId` int unsigned NOT NULL,
	`title` varchar(255) NOT NULL,
	`content` varchar(255) NOT NULL,
	`date` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `Reviews_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `Reviews` ADD CONSTRAINT `Reviews_userId_User_id_fk` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Reviews` ADD CONSTRAINT `Reviews_subjectId_Subject_id_fk` FOREIGN KEY (`subjectId`) REFERENCES `Subject`(`id`) ON DELETE no action ON UPDATE no action;