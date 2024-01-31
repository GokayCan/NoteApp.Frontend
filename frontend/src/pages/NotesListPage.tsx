import React, { useState, useEffect } from "react";
import axios from "axios";

const NotesListPage = () => {
  const [notes = [], setNotes] = useState<any>([]);

  useEffect(() => {
    try {
      axios.get("api/notes").then((res) => {
        setNotes(res.data);
      });
    } catch (error) {
      console.error("Notları alma sırasında bir hata oluştu:", error);
    }
  }, []);

  return (
    <div>
      <div className="notes-list">
        dasdas
        {notes.map((note, index) => (
          <h3 key={index}>{note.body}</h3>
        ))}
      </div>
    </div>
  );
};

export default NotesListPage;
