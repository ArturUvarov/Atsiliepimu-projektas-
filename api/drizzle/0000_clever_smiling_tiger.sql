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
CREATE TABLE `Reviews` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`userId` int unsigned NOT NULL,
	`subjectId` int unsigned NOT NULL,
	`title` varchar(255) NOT NULL,
	`content` text,
	`date` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `Reviews_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `Subject` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	CONSTRAINT `Subject_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `SubjectTag` (
	`subjectId` int unsigned NOT NULL,
	`tagId` int unsigned NOT NULL,
	CONSTRAINT `SubjectTag_subjectId` PRIMARY KEY(`subjectId`)
);
--> statement-breakpoint
CREATE TABLE `Tag` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	CONSTRAINT `Tag_id` PRIMARY KEY(`id`)
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
--> statement-breakpoint
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_reviewId_Reviews_id_fk` FOREIGN KEY (`reviewId`) REFERENCES `Reviews`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_userId_User_id_fk` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Rate` ADD CONSTRAINT `Rate_reviewId_Reviews_id_fk` FOREIGN KEY (`reviewId`) REFERENCES `Reviews`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Rate` ADD CONSTRAINT `Rate_userId_User_id_fk` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Reviews` ADD CONSTRAINT `Reviews_userId_User_id_fk` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Reviews` ADD CONSTRAINT `Reviews_subjectId_Subject_id_fk` FOREIGN KEY (`subjectId`) REFERENCES `Subject`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `SubjectTag` ADD CONSTRAINT `SubjectTag_subjectId_Subject_id_fk` FOREIGN KEY (`subjectId`) REFERENCES `Subject`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `SubjectTag` ADD CONSTRAINT `SubjectTag_tagId_Tag_id_fk` FOREIGN KEY (`tagId`) REFERENCES `Tag`(`id`) ON DELETE no action ON UPDATE no action;