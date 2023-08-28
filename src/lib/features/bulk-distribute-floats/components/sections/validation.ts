import { hasFLOATCollectionSetUp } from '$flow/actions';
import { create, enforce, test, skipWhen } from 'vest';

const validationSuite = create((data: string) => {
	test('address', 'Address should have 18 chars', () => {
		enforce(data).lengthEquals(18);
	});

	test('address', 'Address should start with 0x', () => {
		enforce(data).startsWith('0x');
	});

	skipWhen(validationSuite.get().hasErrors('address'), () => {
		test.memo(
			'address',
			"Address doesn't have a FLOAT Collection set up.",
			async () => {
				return (await checkAddress(data)) as string;
			},
			[data]
		);
	});
});

const checkAddress = async (address: string) => {
	return new Promise((resolve, reject) => {
		setTimeout(async () => {
			const success = await hasFLOATCollectionSetUp(address);
			if (success) {
				resolve(true);
			} else {
				reject();
			}
		}, 1000);
	});
};

export default validationSuite;
