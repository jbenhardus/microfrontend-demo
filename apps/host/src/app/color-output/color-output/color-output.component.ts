import { Component, OnInit } from '@angular/core';
import { VoteItem, VotesFacade } from '@microfrontend-demo/state';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'microfrontend-demo-color-output',
  templateUrl: './color-output.component.html',
  styleUrls: ['./color-output.component.less'],
})
export class ColorOutputComponent {
  color$: Observable<string> = this.facade.voteItems$.pipe(
    map((items) => this.calculateColor(items))
  );
  winner$: Observable<string> = this.facade.voteItems$.pipe(
    map((items) => this.calculateWinner(items))
  );
  textColor$ = this.color$.pipe(
    map((color) => (color === '#000000' ? '#ffffff' : '#000000'))
  );
  constructor(private facade: VotesFacade) {}

  calculateColor = (items: VoteItem[]) => {
    const total = items.map((item) => item.count).reduce((a, b) => a + b, 0);
    const [redVal, greenVal, blueVal] = ['red', 'green', 'blue'].map(
      (label) => items.find((item) => item.label === label)?.count || 0
    );
    const [redShare, greenShare, blueShare] = [redVal, greenVal, blueVal].map(
      (val) => val / total
    );
    const [redHex, greenHex, blueHex] = [redShare, greenShare, blueShare].map(
      (share) => this.getHexPortion(share)
    );
    const color = `#${redHex}${greenHex}${blueHex}`;
    return color;
  };

  calculateWinner(items: VoteItem[]) {
    const max = Math.max(...items.map((item) => item.count));
    if (max === 0) {
      return 'no votes yet';
    }
    const winners: string[] = [];
    items.forEach((item) => {
      if (item.count === max) {
        winners.push(item.label);
      }
    });
    return `${winners.join(' and ')} ${
      winners.length > 1 ? 'are' : 'is'
    } winning!`;
  }

  getHexPortion(value: number) {
    const baseTen = Math.round(value * 256);
    const bounded = Math.max(Math.min(255, baseTen), 0);
    let hex = bounded.toString(16);
    if (hex === '0' || hex === 'NaN') {
      hex = '00';
    }
    return hex;
  }
}
