import { TestBed } from "@angular/core/testing";

import { QuestService } from "./quest.service";

describe("QuestService", () => {
  let service: QuestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should have a BASE_URL set", () => {
    expect(service.BASE_URL).toBeTruthy();
  });
});
