import {DtmfPlayer} from '../';

describe('DtmfPlayer', function() {
	let dtmfPlayer;

	beforeEach(() => {
		dtmfPlayer = new DtmfPlayer();
		expect(dtmfPlayer).to.be.instanceof(DtmfPlayer);
	});

	afterEach(() => {
		dtmfPlayer.close();
	});

	it('should play a DTMF during 200ms', (done) => {
		dtmfPlayer.play('1');
		setTimeout(() => {
			dtmfPlayer.stop();
			done();
		}, 200);
	});

	it('should stop previous DTMF before starting a new one', (done) => {
		dtmfPlayer.play('2');
		setTimeout(() => {
			dtmfPlayer.play('3');
		}, 100);
		setTimeout(() => {
			dtmfPlayer.stop();
			done();
		}, 200);
	});
});
