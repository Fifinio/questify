import { Injectable, OnInit } from "@angular/core";
import Quest from "src/common/interfaces/quest.interface";
import { from } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class QuestService implements OnInit {
  quests: Quest[] = [];
  BASE_URL: string = "http://my-json-server.typicode.com/fifinio/db";
  constructor() {}
  ngOnInit(): void {
    this.fetchQuests();
  }

  async fetchQuests(): Promise<void> {
    const result = await fetch(this.BASE_URL + "/quests")
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
    result.subscribe((quests: Quest[]) => {
      this.quests = quests as Quest[];
    });
  }
}
