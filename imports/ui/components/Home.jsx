import { Meteor } from 'meteor/meteor';
import React from 'react';
import List from './crud/List.jsx';
import Save from './crud/Save.jsx';
import { Clients } from '../../api/clients.js';
import { createContainer } from 'meteor/react-meteor-data';
import { Helpers } from '../helpers/Helpers.jsx';

const Home = ({clients}) => {


	// Formatting the data from the clients model
	// to be passed to the List Component
	let data = clients.map((client, i) => {

		// Client Name
		clientData = [];
		clientData.push({value: client.name, icon: 'account_circle'});

		// Client Phone
		let phone = Helpers.searchArrayByName(client.attributes, 'phone');
		clientData.push({value: phone.value, icon: 'phone'});

		return clientData;

	});

	fields = [
		{
			name: 'name',
			type: 'text'
		},
		{
			name: 'status',
			type: 'select',
			options: [
				{
					name: 'Pendente',
					value: 0
				},
				{
					name: 'Completo',
					value: 1
				}
			]
		}
	];

	return(
		<div className="container">
			<List data={data} />
			<Save fields={fields} />
		</div>
	);
};

export default createContainer(() => {
	Meteor.subscribe('clients');
  return {
    clients: Clients.find({}).fetch()
  };
}, Home);
