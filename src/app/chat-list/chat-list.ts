import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-list',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent {
  conversations = [
    {
      name: 'Daniel Mark',
      lastMessage: 'Hey friend! last using Arise app',
      time: '2m',
      avatar: 'assets/imges/Avatar1.svg',
      unreadCount: 0,
      filter: 'all'
    },
    {
      name: 'Adaptive Riders United',
      lastMessage: 'Minu: Hello every one',
      time: '5m',
      avatar: 'assets/imges/Avatar.svg',
      unreadCount: 0,
      filter: 'unread'
    },
    {
      name: 'Adaptive Riders United',
      lastMessage: 'Minu: Hello every one',
      time: '8m',
      avatar: 'assets/imges/Ellipse 514.svg',
      unreadCount: 2,
      filter: 'groups'
    },
    {
      name: 'Adaptive Riders United',
      lastMessage: 'Minu: typing...',
      time: '12m',
      avatar: 'assets/imges/Avatar.svg',
      unreadCount: 0,
      filter: 'all'
    },
    {
      name: 'Daniel Mark',
      lastMessage: 'Thank you for being here ❤️',
      time: '15m',
      avatar: 'assets/imges/Ellipse 514.svg',
      unreadCount: 2,
      filter: 'unread'
    },
    {
      name: 'Daniel Mark',
      lastMessage: 'Thank you for being here ❤️',
      time: '18m',
      avatar: 'assets/imges/Avatar1.svg',
      unreadCount: 1,
      filter: 'groups'
    },
    {
      name: 'Daniel Mark',
      lastMessage: 'typing...',
      time: '22m',
      avatar: 'assets/imges/Avatar.svg',
      unreadCount: 0,
      filter: 'all'
    }
  ];

   activeFilter: string = 'all';
  searchTerm: string = '';

  get filteredConversations() {
    return this.conversations.filter(chat => {
      const matchesFilter = this.activeFilter === 'all' || chat.filter === this.activeFilter;
      const matchesSearch = chat.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }
}

