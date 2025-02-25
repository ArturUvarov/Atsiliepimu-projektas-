CREATE TABLE `Comment` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`review_id` int unsigned NOT NULL,
	`user_id` int unsigned,
	`content` varchar(255) NOT NULL,
	`date` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `Comment_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `Rate` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`review_id` int unsigned NOT NULL,
	`user_id` int unsigned NOT NULL,
	`rate` tinyint NOT NULL,
	CONSTRAINT `Rate_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `Review` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`user_id` int unsigned NOT NULL,
	`subject_id` int unsigned NOT NULL,
	`title` varchar(255) NOT NULL,
	`content` varchar(255) NOT NULL,
	`date` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `Review_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `Subject` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	CONSTRAINT `Subject_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `SubjectTag` (
	`subject_id` int unsigned NOT NULL,
	`tag_id` int unsigned NOT NULL,
	CONSTRAINT `SubjectTag_subject_id` PRIMARY KEY(`subject_id`)
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
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_review_id_Review_id_fk` FOREIGN KEY (`review_id`) REFERENCES `Review`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_user_id_User_id_fk` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Rate` ADD CONSTRAINT `Rate_review_id_Review_id_fk` FOREIGN KEY (`review_id`) REFERENCES `Review`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Rate` ADD CONSTRAINT `Rate_user_id_User_id_fk` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Review` ADD CONSTRAINT `Review_user_id_User_id_fk` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Review` ADD CONSTRAINT `Review_subject_id_Subject_id_fk` FOREIGN KEY (`subject_id`) REFERENCES `Subject`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `SubjectTag` ADD CONSTRAINT `SubjectTag_subject_id_Subject_id_fk` FOREIGN KEY (`subject_id`) REFERENCES `Subject`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `SubjectTag` ADD CONSTRAINT `SubjectTag_tag_id_Tag_id_fk` FOREIGN KEY (`tag_id`) REFERENCES `Tag`(`id`) ON DELETE no action ON UPDATE no action;