import { ComponentFixture, TestBed } from "@angular/core/testing";

import { QuestsComponent } from "./quests.component";

describe("QuestsComponent", () => {
  let component: QuestsComponent;
  let fixture: ComponentFixture<QuestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should setSelectedIndex properly", () => {
    const buttonsContainer = document.createElement("div");
    for (let i = 0; i < 3; i++) {
      const button = document.createElement("button");
      button.classList.add("active");
      buttonsContainer.appendChild(button);
    }
    component.setSelectedIdx(1, buttonsContainer);
    expect(component.selectedIdx).toEqual(1);
    Array.from(buttonsContainer.children).forEach((button, index) => {
      if (index == 1) {
        expect(button.classList.contains("active")).toBe(true);
      } else {
        expect(button.classList.contains("active")).toBe(false);
      }
    });
  });
});
