import React, { useState } from 'react';
import '../styles/Test.css';

function Test() {
  const [workspaceBoxes, setWorkspaceBoxes] = useState([]);

  // To store the position offset during dragging
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [draggingOffset, setDraggingOffset] = useState({ x: 0, y: 0 });

  // When a box is dragged from the left sidebar
  const handleDragStart = (event, boxType) => {
    event.dataTransfer.setData('boxType', boxType);
  };

  // Handles the drop of a new box inside the workspace
  const handleDrop = (event) => {
    event.preventDefault();
    const boxType = event.dataTransfer.getData('boxType');
    const x = event.clientX - event.currentTarget.offsetLeft;
    const y = event.clientY - event.currentTarget.offsetTop;

    setWorkspaceBoxes([...workspaceBoxes, { id: workspaceBoxes.length + 1, type: boxType, x, y }]);
  };

  // Enables repositioning of boxes inside the workspace
  const handleWorkspaceBoxDragStart = (event, index) => {
    setDraggingIndex(index);
    /*setDraggingOffset({
      x: event.clientX - workspaceBoxes[index].x,
      y: event.clientY - workspaceBoxes[index].y,
    });*/
  };

  const handleWorkspaceBoxDrag = (event) => {
    if (draggingIndex === null) return;

    const newWorkspaceBoxes = [...workspaceBoxes];
    newWorkspaceBoxes[draggingIndex].x = event.clientX - draggingOffset.x;
    newWorkspaceBoxes[draggingIndex].y = event.clientY - draggingOffset.y;
    //setWorkspaceBoxes(newWorkspaceBoxes);
  };

  const handleWorkspaceBoxDragEnd = () => {
    setDraggingIndex(null); // Stop dragging when drag ends
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Necessary to allow dropping
  };

  return (
    <div className="Test">
      <div className="box-container">
        {/* Draggable boxes */}
        <div
          className="box"
          draggable
          onDragStart={(event) => handleDragStart(event, 'Box 1')}
        >
          Box 1
        </div>
        <div
          className="box"
          draggable
          onDragStart={(event) => handleDragStart(event, 'Box 2')}
        >
          Box 2
        </div>
        <div
          className="box"
          draggable
          onDragStart={(event) => handleDragStart(event, 'Box 3')}
        >
          Box 3
        </div>
      </div>

      {/* Workspace area */}
      <div
        className="workspace"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onMouseMove={handleWorkspaceBoxDrag} // Update position during dragging
        onMouseUp={handleWorkspaceBoxDragEnd} // Stop dragging on mouse up
      >
        <h3>Workspace</h3>
        {workspaceBoxes.map((box, index) => (
          <div
            key={box.id}
            className="workspace-box"
            style={{ left: box.x, top: box.y, position: 'absolute' }}
            draggable
            onDragStart={(event) => handleWorkspaceBoxDragStart(event, index)}
            onDragEnd={handleWorkspaceBoxDragEnd}
          >
            {box.type} #{box.id}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;
