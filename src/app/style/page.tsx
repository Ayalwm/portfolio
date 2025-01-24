'use client';
import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';

const QuestionEditor = () => {
  // State to hold all questions with their answers (content)
  const [questions, setQuestions] = useState<{ question: string; answer: string }[]>([]);

  // Function to add a new question and initialize the editor for the answer
  const addQuestion = () => {
    setQuestions([...questions, { question: '', answer: '' }]); // Add an empty question and answer
  };

  return (
    <div>
      {/* Button to add a new question */}
      <button onClick={addQuestion}>Add Question</button>

      <div>
        {questions.map((item, index) => {
          // Initialize the editor for each answer using useEditor
          const editor = useEditor({
            extensions: [StarterKit],
            content: item.answer, // Set initial content as the current answer
            onUpdate: ({ editor }) => {
              // Update the answer in the state whenever the editor content changes
              const updatedQuestions = [...questions];
              updatedQuestions[index].answer = editor.getHTML();
              setQuestions(updatedQuestions);
            },
          });

          return (
            <div key={index} style={{ marginBottom: '20px' }}>
              {/* Editable question */}
              <div
                style={{
                  background: '#f0f8ff', // Light background for question
                  padding: '10px',
                  borderRadius: '5px',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                }}
              >
                <input
                  type="text"
                  value={item.question}
                  onChange={(e) => {
                    const updatedQuestions = [...questions];
                    updatedQuestions[index].question = e.target.value;
                    setQuestions(updatedQuestions);
                  }}
                  placeholder="Enter your question here"
                  style={{ width: '100%', border: 'none', backgroundColor: 'transparent' }}
                />
              </div>

              {/* Editor for the answer */}
              {editor && (
                <div style={{ marginTop: '10px' }}>
                  <EditorContent editor={editor} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionEditor;
