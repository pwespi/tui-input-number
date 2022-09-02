import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  TuiDecimalSymbol,
  TuiNumberFormatSettings,
  TUI_NUMBER_FORMAT,
} from '@taiga-ui/core';

export class TuiNumberFormat implements TuiNumberFormatSettings {
  get decimalLimit(): number {
    return Infinity;
  }

  get decimalSeparator(): TuiDecimalSymbol {
    return '.';
  }

  get thousandSeparator(): string {
    return "'";
  }

  get zeroPadding(): boolean {
    return false;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    // this works:
    // {
    //   provide: TUI_NUMBER_FORMAT,
    //   useValue: {
    //     decimalLimit: Infinity,
    //     decimalSeparator: '.',
    //     thousandSeparator: "'",
    //     zeroPadding: false,
    //   },
    // },

    // this causes problems:
    {
      provide: TUI_NUMBER_FORMAT,
      useClass: TuiNumberFormat,
    },
  ],
})
export class AppComponent {
  readonly control = new FormControl(null);
}
