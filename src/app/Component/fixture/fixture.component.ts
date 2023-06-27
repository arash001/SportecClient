import { LiveAnnouncer } from '@angular/cdk/a11y';
import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { PutDataRequest } from 'src/app/Model/PutDataRequest.model';
import { Fixture } from 'src/app/Model/fixture.model';
import { FixtureService } from 'src/app/Service/fixture.service';
import * as moment from 'moment';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css'],
  providers: [DatePipe]
})
export class FixtureComponent implements OnInit {
  putDataRequestFromXml: PutDataRequest[] = [];
  dataSourceFixture: Fixture[] = [];
  //displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<Fixture>([]);
  dataSourceOrg = new MatTableDataSource<Fixture>([]);
  dataSourceMatchDay: string[] = [];
  dataSourceMatchDay1: string[] = [];
  displayedColumns: string[] = ['competitionName', 'homeTeamName', 'guestTeamName', 'matchDay', 'season', 'plannedKickoffTime', 'stadiumName', 'startDate'];
  matchDaysList: any[] = [];
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  pageSize = 10;
  pageIndex = 0;
  matchDayControl = new FormControl();
  matchDays: string[] = [];
  selectmatchday: string = "";
  selectedMatchDay: number = 1;
  sortedFixtures: any[] = [];

  constructor(private fixtureService: FixtureService, protected datePipe: DatePipe, private _liveAnnouncer: LiveAnnouncer) {
  }


  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    console.log(this.dataSourceMatchDay1)
    this.fixtureService.getAll().subscribe(
      (data) => {
        console.log(data);

        this.dataSourceOrg = new MatTableDataSource(data["fixtures"]["fixture"]);
        this.putDataRequestFromXml = data;
        this.sortedFixtures = data.fixtures.fixture
          .map((fixture: any) => {
            return {
              ...fixture,
              plannedKickoffTime: new Date(fixture.plannedKickoffTime),
              startDate: new Date(fixture.startDate),
              endDate: new Date(fixture.endDate)
            };
          })
        if (data && data.fixtures && data.fixtures.fixture) {
          data.fixtures.fixture.sort((a: Fixture, b: Fixture) => {
            const dateA = moment(a.plannedKickoffTime, moment.ISO_8601);
            const dateB = moment(b.plannedKickoffTime, moment.ISO_8601);
            return dateB.diff(dateA);
          });
        }

        const matchdays: string = data.fixtures.fixture.map((fixture: Fixture) => fixture.matchDay.toString());
        const uniqueMatchdays: string[] = Array.from(new Set(matchdays));
        let uniqueArray = Array.from(new Set(matchdays));
        let uniqueStringArray: string[] = uniqueArray.map(item => String(item));

        this.dataSource = new MatTableDataSource(this.sortedFixtures);
        console.log(this.dataSourceMatchDay)
        let matches = data.fixtures.fixture;
        this.matchDays = Array.from(new Set(matches.map((match: any) => match.matchDay.toString())));
        this.dataSourceMatchDay = (this.matchDays);
        this.dataSourceFixture = data.fixtures.fixture


        this.sortKickTime()
        this.sortDataSource('plannedKickoffTime', 'asc');
      }
    )
  }

  sortDataSource(id: string, start: string) {
    this.dataSource.data.sort((a: any, b: any) => {
      return start === 'asc'
        ? a[id] - b[id]
        : start === 'desc'
          ? b[id] - a[id]
          : a[id] - b[id];
    });
    this.dataSource._updateChangeSubscription();
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }



  private convertDateProperties(obj: any) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (typeof value === 'object' && value !== null) {
          this.convertDateProperties(value); // Recursively convert nested objects
        } else if (key === 'date' && typeof value === 'string') {
          obj[key] = new Date(value).toLocaleDateString(); // Convert the date property to a normal date format
        }
      }
    }
  }

  sortKickTime() {
    if (this.dataSource) {
      this.dataSource.data.sort((a: Fixture, b: Fixture) => {
        const dateA = moment(a.plannedKickoffTime, moment.ISO_8601);
        const dateB = moment(b.plannedKickoffTime, moment.ISO_8601);
        return dateB.diff(dateA);
      });
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  }

  changeChkState(id: number) {

  }

  getColumnValue(element: any, column: string): string {
    const keys = column.split('.');
    let value = element;

    for (const key of keys) {
      if (value.hasOwnProperty(key)) {
        value = value[key];
      } else {
        value = '';
        break;
      }
    }
    return value;
  }

  OnSelectmatchday(event: any) {
    this.selectedMatchDay = event;

  }

  onSearch() {
    if (this.selectedMatchDay != 0)
    this.dataSource.data = this.dataSourceOrg.data.filter(fixture => fixture.matchDay == this.selectedMatchDay);
    else
    this.dataSource.data = this.dataSourceOrg.data;

  }
  onSave() {
    this.fixtureService.save(this.putDataRequestFromXml)
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}


