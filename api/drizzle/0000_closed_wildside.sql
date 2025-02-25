CREATE TABLE `comment` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`reviewId` int unsigned NOT NULL,
	`userId` int unsigned NOT NULL,
	`content` varchar(255) NOT NULL,
	`date` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `comment_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `rate` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`reviewId` int unsigned,
	`userId` int unsigned,
	`rate` tinyint unsigned NOT NULL,
	CONSTRAINT `rate_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `review` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`userId` int unsigned NOT NULL,
	`subjectId` int unsigned NOT NULL,
	`title` varchar(255) NOT NULL,
	`content` varchar(255) NOT NULL,
	`date` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `review_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `subject` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	CONSTRAINT `subject_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `subject_tag` (
	`subjectId` int unsigned NOT NULL,
	`tagId` int unsigned NOT NULL,
	CONSTRAINT `subject_tag_subjectId` PRIMARY KEY(`subjectId`)
);
--> statement-breakpoint
CREATE TABLE `tag` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	CONSTRAINT `tag_id` PRIMARY KEY(`id`)
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
ALTER TABLE `comment` ADD CONSTRAINT `comment_reviewId_review_id_fk` FOREIGN KEY (`reviewId`) REFERENCES `review`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `comment` ADD CONSTRAINT `comment_userId_User_id_fk` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `rate` ADD CONSTRAINT `rate_reviewId_review_id_fk` FOREIGN KEY (`reviewId`) REFERENCES `review`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `rate` ADD CONSTRAINT `rate_userId_User_id_fk` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `review` ADD CONSTRAINT `review_userId_User_id_fk` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `review` ADD CONSTRAINT `review_subjectId_subject_id_fk` FOREIGN KEY (`subjectId`) REFERENCES `subject`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `subject_tag` ADD CONSTRAINT `subject_tag_subjectId_subject_id_fk` FOREIGN KEY (`subjectId`) REFERENCES `subject`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `subject_tag` ADD CONSTRAINT `subject_tag_tagId_tag_id_fk` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE no action ON UPDATE no action;