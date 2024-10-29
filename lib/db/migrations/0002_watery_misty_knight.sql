ALTER TABLE "projects" RENAME COLUMN "team_id" TO "user_id";--> statement-breakpoint
ALTER TABLE "projects" DROP CONSTRAINT "projects_team_id_teams_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects" ADD CONSTRAINT "projects_user_id_teams_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."teams"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
