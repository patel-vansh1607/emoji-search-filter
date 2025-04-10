import EmojiPicker, {Emoji} from 'emoji-picker-react';

const EmojiSearcher = () => {
const [selectedEmoji, setSelectedEmoji] = useState("");

  return (
    <div>
      <h2>Emoji Picker</h2>
      <div>
        {selectedEmoji}
      </div>
      <EmojiPicker />
    </div>
  );
}

export default EmojiSearcher