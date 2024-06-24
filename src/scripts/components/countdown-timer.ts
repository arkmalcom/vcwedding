class CountdownTimer {
  private targetDate: Date;
  private intervalId: number | undefined;

  constructor(targetDateString: string) {
    this.targetDate = new Date(targetDateString);
    this.intervalId = undefined;
  }

  start(
    callback: (
      days: number,
      hours: number,
      minutes: number,
      seconds: number,
    ) => void,
  ) {
    const updateTimer = () => {
      const now = new Date();
      const diff = this.targetDate.getTime() - now.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      callback(days, hours, minutes, seconds);
    };

    updateTimer(); // Call once immediately

    this.intervalId = setInterval(updateTimer, 1000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }
}

export default CountdownTimer;
