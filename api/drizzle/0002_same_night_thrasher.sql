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
ALTER TABLE `SubjectTag` ADD CONSTRAINT `SubjectTag_subjectId_Subject_id_fk` FOREIGN KEY (`subjectId`) REFERENCES `Subject`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `SubjectTag` ADD CONSTRAINT `SubjectTag_tagId_Tag_id_fk` FOREIGN KEY (`tagId`) REFERENCES `Tag`(`id`) ON DELETE no action ON UPDATE no action;