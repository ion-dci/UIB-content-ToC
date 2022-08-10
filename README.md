# Basic HTML Exercises
[![Status overview badge](../../blob/badges/.github/badges/autograding/badge.svg)](#results)


## Exercise: Table Of Contents

**Instructions**:

1. Add a unique id to each heading tag in the page, make the id as descriptive as possible.

2. Wrap the text in the table of contents in an ordered list so that each main heading and its sub headings are in the same list.

3. In each list item under the main heading text, add another **nested** ordered list so that each sub heading is wrapped in a list item.

4. For each of the list items in the table of contents, add an anchor link that wraps around the text. when the link is clicked, the page should scroll to that heading.

5. At the end of each section in the text, before the next sub heading, add a "Back to top" link, that scrolls the page back to the top.

6. Change the nested list numbering to roman numerals.

[//]: # (autograding info start)
## Results


### UIB - Content-Toc

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status0.svg) | Each heading should contain a unique ID |
| ![Status](../../blob/badges/.github/badges/autograding/status1.svg) | Heading should be wrapped with an outer OL tag |
| ![Status](../../blob/badges/.github/badges/autograding/status2.svg) | Each Heading should be wrapped in an LI tag containing A tags and OL tag |
| ![Status](../../blob/badges/.github/badges/autograding/status3.svg) | Header links should scroll to the corresponding heading |
| ![Status](../../blob/badges/.github/badges/autograding/status4.svg) | 'Back to top' Link should redirect user to the top of the page |



[🔬 Results Details](https://github.com/DigitalCareerInstitute/UIB-content-ToC/actions)

[📢 Give Feedback or Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=UIB-content-ToC&entry.2115011968=https%3A%2F%2Fgithub.com%2FDigitalCareerInstitute%2FUIB-content-ToC)

### Debugging your code
> [reading the test outputs](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)

There are two ways to see why tasks might not be completed:
#### 1. Running tests locally
- Run `npm install`
- Run `npm test` in the terminal. You will see where your solution differs from the expected result.

#### 2. Inspecting the test output on GitHub
- Go to the [Actions tab of your exercise repo](https://github.com/DigitalCareerInstitute/UIB-content-ToC/actions)
- You will see a list of the test runs. Click on the topmost one.
- Click on 'Autograding'
- Expand the item 'Run DCI-EdTech/autograding-action@main'
- Here you see all outputs from the test run

[//]: # (autograding info end)