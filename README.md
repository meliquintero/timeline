#React JS Timeline

* I spent 10 hours.
* I like:
  - The implementation of `LinkedList` that allows quick insertion and potential deletion of an event.
  - Having the logic for sorting the `Items` encapsulated in a class. It will make the coming features much organic to implement.
  - I like that the positioning of the events in the grid are set with styling and not from array indexation. And that the grid is pure `CSS` instead of a represented Matrix.
* I would change:
  - Some of the React components structure. Maybe having a different component for the `months` and `days` instead of the same `CellList` than the `timeLimeItem`. I tried separating them, but for to the days to aligned with the corresponding events, they needed to be on the same grid.
  - Have a nice inline `EditableContent` component. I am kinda proud about the useEffect hook updating the parent state in real time, but does not look very conventional having the handleSubmit just updating the UI. I saw some Inline editable code on the internet and they were so fancy.
  - Having an `Utils` file is not favorite way to organize helpers, but for a small project like this one I guess does not hurt as much. Plus, all the  functions are all Date related. ¯\\\_(ツ)\_/¯.
  - Invest more time as well on the styling.
* I identified a matrix would be a good way to contain the elements. Although, because the elements are actually ranges, I decided to use an array of linkedLists instead of an array of array. This would allow efficient  insertion and deletion. I research into other data structures and debated (with myself) if I could have the timelineItems represented on a type of graph or heap, I also looked briefly into Interval trees and Segment Trees. I could not see how I would benefit from those.

* I would test:
  - When existing events `start` or `end` are modified, how does it affect the overall distribution of the `timeLimeItems`.
  - How does it is displayed in other devises.
  - Dynamically create number of rows.
  - initialize `Items` with start and end date, I think that would facilitate to the zoom in and zoom out feature.
