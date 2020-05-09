import { Injectable } from '@angular/core';
import Post from '../models/Post';

@Injectable({
	providedIn: 'root'
})
export class PostService {
	constructor() {}

	public getLinks(): Post[] {
		let links = [
			{
				id: 1,
				name: 'PHP do Jeito certo',
				server: 'Mega',
				size: '2.67',
				sharing: 'Http',
				year: '2017',
				date: '26/05/2019',
				link: 'https://mega.nz/#F!StkXVKaQ!jUGis4eT7gWtnjWyKlfPiQ',
				image:
					'https://i0.wp.com/wp.laravel-news.com/wp-content/uploads/2017/07/php-leader.png?resize=2200%2C1125'
			},
			{
				id: 2,
				name: 'Python',
				server: 'Google Drive',
				size: '1.8',
				sharing: 'Http',
				year: 'Não Definido',
				date: '26/05/2019',
				link: 'https://drive.google.com/uc?id=0Bwai0kYN-ieKRTNldzJYVm9tWnc&export=download',
				image: 'https://miro.medium.com/max/2000/1*ueWmI48uuShON-hX7LwI0w.png'
			},
			{
				id: 3,
				name: 'PHP do Jeito certo',
				server: 'Mega',
				size: '2.67',
				sharing: 'Http',
				year: '2017',
				date: '26/05/2019',
				link: 'https://mega.nz/#F!StkXVKaQ!jUGis4eT7gWtnjWyKlfPiQ',
				image:
					'https://i0.wp.com/wp.laravel-news.com/wp-content/uploads/2017/07/php-leader.png?resize=2200%2C1125'
			},
			{
				id: 4,
				name: 'Python',
				server: 'Google Drive',
				size: '1.8',
				sharing: 'Http',
				year: 'Não Definido',
				date: '26/05/2019',
				link: 'https://drive.google.com/uc?id=0Bwai0kYN-ieKRTNldzJYVm9tWnc&export=download',
				image: 'https://miro.medium.com/max/2000/1*ueWmI48uuShON-hX7LwI0w.png'
			},
			{
				id: 5,
				name: 'PHP do Jeito certo',
				server: 'Mega',
				size: '2.67',
				sharing: 'Http',
				year: '2017',
				date: '26/05/2019',
				link: 'https://mega.nz/#F!StkXVKaQ!jUGis4eT7gWtnjWyKlfPiQ',
				image:
					'https://i0.wp.com/wp.laravel-news.com/wp-content/uploads/2017/07/php-leader.png?resize=2200%2C1125'
			},
			{
				id: 6,
				name: 'Python',
				server: 'Google Drive',
				size: '1.8',
				sharing: 'Http',
				year: 'Não Definido',
				date: '26/05/2019',
				link: 'https://drive.google.com/uc?id=0Bwai0kYN-ieKRTNldzJYVm9tWnc&export=download',
				image: 'https://miro.medium.com/max/2000/1*ueWmI48uuShON-hX7LwI0w.png'
			},
			{
				id: 7,
				name: 'PHP do Jeito certo',
				server: 'Mega',
				size: '2.67',
				sharing: 'Http',
				year: '2017',
				date: '26/05/2019',
				link: 'https://mega.nz/#F!StkXVKaQ!jUGis4eT7gWtnjWyKlfPiQ',
				image:
					'https://i0.wp.com/wp.laravel-news.com/wp-content/uploads/2017/07/php-leader.png?resize=2200%2C1125'
			},
			{
				id: 8,
				name: 'Python',
				server: 'Google Drive',
				size: '1.8',
				sharing: 'Http',
				year: 'Não Definido',
				date: '26/05/2019',
				link: 'https://drive.google.com/uc?id=0Bwai0kYN-ieKRTNldzJYVm9tWnc&export=download',
				image: 'https://miro.medium.com/max/2000/1*ueWmI48uuShON-hX7LwI0w.png'
			}
		];

		return links;
	}

	public getPost(): Post {
		let post = {
			id: 1,
			name: 'PHP do Jeito certo',
			server: 'Mega',
			size: '2.67',
			sharing: 'Http',
			year: '2017',
			date: '26/05/2019',
			link: 'https://mega.nz/#F!StkXVKaQ!jUGis4eT7gWtnjWyKlfPiQ',
			image: 'https://i0.wp.com/wp.laravel-news.com/wp-content/uploads/2017/07/php-leader.png?resize=2200%2C1125'
		};

		return post;
	}
}
