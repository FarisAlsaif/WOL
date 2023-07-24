import { Injectable } from '@angular/core';
import { member } from '../../interfaces/types';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor() { }

  getMembers():member[]{
    return [{
      "id": 1,
      "name": "John Doe",
      "kfu_id": "JD12345",
      "section": "Support services",
      "role": "Player"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "kfu_id": "JS67890",
      "section": "Aldawa",
      "role": "speaker"
    },
    {
      "id": 3,
      "name": "Mike Johnson",
      "kfu_id": "MJ24680",
      "section": "Arts",
      "role": "Artist"
    },
    {
      "id": 4,
      "name": "Sarah Lee",
      "kfu_id": "SL13579",
      "section": "Aldawa",
      "role": "writer"
    },
    {
      "id": 5,
      "name": "Alex Wang",
      "kfu_id": "AW97531",
      "section": "Support services",
      "role": "Researcher"
    },
    {
      "id": 6,
      "name": "Emily Chen",
      "kfu_id": "EC86420",
      "section": "Technology",
      "role": "Developer"
    },
    {
      "id": 7,
      "name": "James Brown",
      "kfu_id": "JB35791",
      "section": "Literature",
      "role": "Media"
    },
    {
      "id": 8,
      "name": "Grace Kim",
      "kfu_id": "GK46802",
      "section": "Photography",
      "role": "Media"
    },
    {
      "id": 9,
      "name": "Ryan Garcia",
      "kfu_id": "RG10293",
      "section": "Film",
      "role": "Director"
    },
    {
      "id": 10,
      "name": "Sophia Nguyen",
      "kfu_id": "SN70983",
      "section": "Education",
      "role": "Teacher"
    }

]}

}
