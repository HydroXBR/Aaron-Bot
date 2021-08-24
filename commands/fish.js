const frames = [
	'🐟',
	'🐟 💨',
	'🐟 💨💨',
	'🐟 💨💨💨',
	'🐟 💨💨💨💨'
];

exports.run = async (client, message, args) => {
    const msg = await message.inlineReply('🐟\💨\💨\💨\💨');
    for (const frame of frames) {
        setTimeout(() => {}, 4000);
        await msg.edit(frame);
    }
    return message;
}