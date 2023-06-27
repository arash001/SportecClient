import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Fixture } from 'src/app/Model/fixture.model';

@Component({
  selector: 'app-fixture-details',
  templateUrl: './fixture-details.component.html',
  styleUrls: ['./fixture-details.component.css'],
  providers: [DatePipe]
})
export class FixtureDetailsComponent implements OnInit {

  private _matches: Fixture[] = [];
  @Input()  public get matches(): Fixture[] {
    return this._matches;
  }
  public set matches(value: Fixture[]) {
    this._matches = value;
    if (value)
    this.groupMatchesByDate();
  }
  matchGroups: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
  
  }


  private groupMatchesByDate(): void {
    const groupedCollection = this.matches.reduce((accumulator: any, item: any) => {
      const key = String(item.startDate);
      if (!accumulator[key]) {
        accumulator[key] = [];
      }
      accumulator[key].push(item);
      return accumulator;
    }, {});

    this.matchGroups = Object.entries(groupedCollection).map(([key, value]) => ({
      key,
      items: value
    }));
  }

  expandedMatch: Fixture | null = null; // Create a variable to track the expanded match

  expandMatch(match: Fixture) {
    this.expandedMatch = match;
  }

  collapseMatch() {
    this.expandedMatch = null;
  }
}
