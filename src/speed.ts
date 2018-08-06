/*
Paces:
9:22
1-mile pace = 9.42 = 1MP 
5K 1MP x 0.09 + 1MP = 5K1
9.42 X 0.09 + 9.5 = 10.35 1MP x 0.05 + 1MP = 5K2
9.42 x 0.05 + 9.5 = 9.97 5K pace = from 5K1 to 5K2
5KP = 9:58 to 10:21
10K 1MP x 0.14 + 1MP = 10K1
9.42 X 0.14 + 9.42 = 10.74 1MP x 0.10 + 1MP = 10K2
9.42 X 0.10 + 9.42 = 10.36 10K pace = 10K1 to 10K2
10KP = 10:44 to 10:22
Half Marathon 1MP x 0.19 + 1MP = HM1
9.42 x 0.19 + 9.42 = 11.21 1MP x 0.15 + 1MP = HM2
9.42 x 0.15 + 9.42 = 10.83 Half-marathon pace = between HM1 and HM2
HMP = 11:13 to 10:50
Marathon 1MP x 0.25 + 1MP = M1
9.42 x 0.25 + 9.42 = 11.78 1MP x 0.20 + 1MP = M2
9.42 x 0.20 + 9.42 = 11.30 Marathon pace = between M1 and M2
MP 11:47 to 11:18
*/

export class SpeedManager {
  private multipliersFor1Mile = {
    high10k: 0.14,
    high5K: 0.09,
    highHalf: 0.19,
    highMarathon: 0.25,
    low10k: 0.10,
    low5K: 0.05,
    lowHalf: 0.15,
    lowMarathon: 0.20,
    lowMile: 0,
  };

/**
 * Given a time string and a distance calculate the mile pace based on the multipliers.
 *
 * @param timeString hh:mm:ss
 * @param speedType multiplier name
 */
  public calculateMileTimeForSpeed(timeString: string, speedType: string) {
    const timeParts = timeString.split(":");
    const hours = +timeParts[0];
    const minutes = +timeParts[1];
    const seconds = +timeParts[2];
    return Math.round((minutes = hours * 60 + minutes + seconds / 60) * 100) / 100;
  }
}
