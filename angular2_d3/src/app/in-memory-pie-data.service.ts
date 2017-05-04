import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemPieDataDB implements InMemoryDbService {
  createDb() {
    let dataset = [
      { label: '5+ Overdue', count: 78 },
      { label: '1-4 Overdue', count: 4 },
      { label: '0 Overdue', count: 17 }      
    ];
    return {dataset};
  }
}