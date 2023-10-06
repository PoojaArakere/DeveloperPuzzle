1.Starting from the master branch, create a new branch chore/code-review.   ==> Done
---------------------------------------------------------------------------

2. Create a file named CODE_REVIEW.md at the workspace root write a short code review based on the existing code. ==> Done

 Are there any problems or code smells in the app? (Focus on code in the libs/books folder)
Reviews

a)Small Comments are necessary for easy understanding of a project especially in larger applications. But I observe comments have been missing in the project.

b)The structure of the folder is not clean, which makes it difficult  for a user to understand and slow down processing. For Example, in libs/books/data-access we can have three folders actions, effects and reducers so that it looks organised and easy to understand.

c)Folder name used in libs\books\data-access\src\lib\+state\ '+state' ,
We cannot use the  character anywhere in a file name.
did a fix by removing character from file name and changes imports too

improvements you would make to the app?

a)The project structure looks complex to undertand. We can restructure the code by organsing in such a way that  the reusable components buttons and all we can define and pass the arguments in corresponding html.
---------------------------------------------------------------------------
3. Accessibility is an important feature of all public facing websites.


1.Buttons do not have an accessible name

given aria-label to define a button for accessibility.

2.Background and foreground colors do not have a sufficient contrast ratio.

 changed the color in  book-search.component.scss , using lighthouse I can see 100% accssibilty
---------------------------------------------------------------------------

4.Fix at least one of the issues noted in step 2 and all the issues from step 3.
Done

---------------------------------------------------------------------------

5.Run lint, unit tests, and e2e tests. Fix anything that fails.

npm run lint== Successfully Done.
npm run test

● Books Reducer › valid Books actions › failedRemoveFromReadingList should undo book removal from the state

    expect(received).toEqual(expected) // deep equality
Array [
        "A",
        "B",
    -   "C",
      ]

      50 |       const result: State = reducer(state, action);
      51 |
    > 52 |       expect(result.ids).toEqual(['A', 'B', 'C']);

found these errors

fixed these error


npm run e2e= successfully done
---------------------------------------------------------------------------
