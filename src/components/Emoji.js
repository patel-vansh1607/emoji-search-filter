import EmojiPicker, {Emoji} from 'emoji-picker-react';
import React, { useState } from 'react';

const EmojiSearcher = () => {
  const [selectedEmoji, setSelectedEmoji] = useState("");
  function onClick( emojiData) {
    setSelectedEmoji(emojiData.unified);
  }

  return (
    <div>
      <h2>Emoji Picker</h2>
      <div>
        {selectedEmoji ? <Emoji unified={selectedEmoji} size={80} /> : null}
      </div>
      <EmojiPicker onEmojiClick={onClick}/>
    </div>
  );
}

export default EmojiSearcher