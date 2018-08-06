import { } from "jasmine";
import { SpeedManager } from "./../src/speed";

console.log;

describe("speed", () => {
  let speedManager;
  beforeEach(() => {
    speedManager = new SpeedManager();
  });

  it("should determine mile time(decimal) given a mile time(clock)", () => {
    expect(speedManager.calculateMileTimeForSpeed("00:09:00", "lowMile")).toEqual(9.0);
    expect(speedManager.calculateMileTimeForSpeed("00:09:30", "lowMile")).toEqual(9.5);
    expect(speedManager.calculateMileTimeForSpeed("00:09:15", "lowMile")).toEqual(9.25);
    expect(speedManager.calculateMileTimeForSpeed("00:9:00", "lowMile")).toEqual(9.0);
    expect(speedManager.calculateMileTimeForSpeed("00:12:22", "lowMile")).toEqual(12.37);
  });

  it("should determine mile time(decimal) given a 5k time(clock)");

  it("should determine mile time(decimal) given a 10k time(clock)");

  it("should determine mile time(decimal) given a half time(clock)");

  it("should determine mile time(decimal) given a marathon time(clock)");
});
