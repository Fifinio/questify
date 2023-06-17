import { Component, OnInit } from "@angular/core";
import Quest from "src/common/interfaces/quest.interface";

@Component({
  selector: "app-quests",
  templateUrl: "./quests.component.html",
  styleUrls: ["./quests.component.scss"],
})
export class QuestsComponent implements OnInit {
  quests: Quest[] = [];
  selectedIdx: number = 0;
  ngOnInit(): void {
    this.quests = [
      {
        title: "Read 10 Books",
        description:
          "Challenge yourself to read 10 books in the next 3 months.",
        goal: "Read 10 books",
        steps: [
          "Create a reading list",
          "Allocate at least 30 minutes per day for reading",
          "Track progress and update the list",
          "Reflect on each book read",
        ],
        rewards: [
          "Expanded knowledge",
          "Improved vocabulary",
          "Enhanced critical thinking",
        ],
        isCompleted: false,
      },
      {
        title: "Learn a New Language",
        description:
          "Embark on a language learning journey and become proficient in a new language.",
        goal: "Learn a new language",
        steps: [
          "Choose a language to learn",
          "Find language learning resources (books, apps, courses)",
          "Practice speaking and writing regularly",
          "Immerse yourself in the language (watch movies, listen to music)",
        ],
        rewards: [
          "Ability to communicate in a new language",
          "Expanded cultural understanding",
          "Improved cognitive abilities",
        ],
        isCompleted: false,
      },
      {
        title: "Run a Marathon",
        description:
          "Train and complete a full marathon (42.195 km) within the next year.",
        goal: "Run a full marathon",
        steps: [
          "Create a training plan",
          "Gradually increase running distance",
          "Incorporate strength and cross-training exercises",
          "Participate in shorter races as preparation",
          "Join a running group for support and motivation",
        ],
        rewards: [
          "Improved cardiovascular fitness",
          "Sense of accomplishment",
          "Strengthened discipline and perseverance",
        ],
        isCompleted: false,
      },
    ];
    this.quests.push({
      title:
        "Complete a 365-Day Photography Challenge and Capture One Unique Photo Every Day",
      description:
        "Immerse yourself in the world of photography by completing a 365-day challenge, capturing a unique photo each day.",
      goal: "Complete a 365-Day Photography Challenge",
      steps: [
        "Choose a camera and familiarize yourself with its settings",
        "Identify interesting subjects and compositions for your photos",
        "Carry your camera with you everywhere",
        "Capture one unique photo every day",
        "Experiment with different techniques, lighting, and perspectives",
        "Reflect on each photo and learn from the process",
      ],
      rewards: [
        "Improved photography skills",
        "Enhanced creativity",
        "A collection of 365 unique photos",
      ],
      isCompleted: false,
    });
  }

  setSelectedIdx(index: number, questButtons: HTMLDivElement) {
    this.selectedIdx = index;
  }
}
