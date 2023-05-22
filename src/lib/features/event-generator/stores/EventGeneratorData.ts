import { writable, type Writable, derived, type Readable } from 'svelte/store';
import type { EventGeneratorData } from '../types/event-generator-data.interface';
import type { FLOAT } from '$lib/types/float/float.interface';

export const eventGeneratorData: Writable<EventGeneratorData> = writable({
	description: '',
	eventId: '',
	host: '',
	image: [],
	name: '',
	totalSupply: '',
	transferrable: false,
	eventType: 'hackathon'
});

export const generatedNft: Readable<FLOAT> = derived(eventGeneratorData, ($eventGeneratorData) => ({
	eventDescription: $eventGeneratorData.description,
	eventHost: $eventGeneratorData.host,
	eventId: $eventGeneratorData.eventId,
	eventImage: $eventGeneratorData.image[0],
	eventName: $eventGeneratorData.name,
	totalSupply: $eventGeneratorData.totalSupply,
	transferrable: $eventGeneratorData.transferrable,
	eventType: $eventGeneratorData.eventType,
	originalRecipient: 'someone.find',
	id: '00001'
}));
