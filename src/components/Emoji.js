import EmojiPicker, {Emoji} from 'emoji-picker-react';

const EmojiSearcher = () => {
const [selectedEmoji, setSelectedEmoji] = useState("");

  return (
    <div>
      <EmojiPicker />
    </div>
  );
}

export default EmojiSearcher