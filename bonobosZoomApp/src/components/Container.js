import React from 'react';
import ZoomContainer from "./ZoomContainer";
import PhotoContainer from "./PhotoContainer";

export const Container = () => {
  render() {
    return (
		<div className="ui container">
			<ZoomContainer />
			<PhotoContainer />
		</div>
    );
  }
}