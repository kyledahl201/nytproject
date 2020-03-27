# NYT API
Reference doc for the guide found here:
    [NYT API site](https://developer.nytimes.com/docs/articlesearch-product/1/overview)


# Lucene
NYT uses Lucene for its basic query syntax. For a comprehensive guide, see:
    [Lucene Tutorial linked in the above page](http://www.lucenetutorial.com/lucene-query-syntax.html)

Here are a few highlights:

## Key-Value Pairs
    Search terms are defined as key-value pairs and separated by a colon. Single words need no quotation
    marks, but words with spaces should be set off with quotations.

> _Syntax:_ field-name:value
            field-name:"value with spaces"
> _Example:_ title:foo
            title:"foo bar"

## Logical Operators
    Logical operators are rendered in uppercase and set off by regular spaces. You can construct advanced
    logical criteria using parentheses.

> _Syntax:_ criteria1 AND criteria2
            (criteria1 AND criteria2) OR criteria3
> _Example:_ title:"foo bar" AND body:"quick fox"
            (title:"foo bar" AND body:"quick fox") OR title:fox

    Use the dash (minus operator) to specify a not-condition.

> _Syntax:_ -field-name:value
> _Example:_ title:foo -title:bar

## Wildcards
    Use the asterisk (*) to search for any text in the specified position.

> _Syntax:_ field-name:criteria*
        ...searches for any text beginning with _criteria_.
            field-name:criteria1*criteria2
        ...searches for any text beginning with _criteria1_ and ending with _criteria2_.

    Note that you cannot use the wildcard character * at the beginning of a search.

## Proximity Matching
    You can find words within a specified distance (in words) of each other.

> _Syntax:_ field-name:"value1 value2"~distance
        ...searches for any text where _value1_ and _value2_ are no more than _distance_ words apart. 
> _Example:_ title:"foo bar"~4

    Note that exact matches (in the above example, "foo bar") are considered proximity zero (0).
    Word transpositions (e.g., "bar foo") are proximity 1.
    Also note that proximity queries assign higher score to documents where the values appear closer 
    together.

## Range searches
    You can search for values between two ranges.

> _Syntax:_ field-name:[lower-range TO upper-range]
> _Example:_ mod_date: [20020101 TO 20030101]
        ...searches for records with a mod_date between 1 Jan 2002 and 1 Jan 2003.

## Boosts
    You may see the following notation in a Lucene query.

> _Syntax:_ (criteria1)^number (criteria2)
> _Example:_ (title:foo OR title:bar)^1.5 (body:foo OR body:bar)

    This indicates that some search clauses are more important than others by the given factor.
    It manipulates how documents score based on the specified criteria.
    In the example, the _title_ search should be scored higher than the _body_ search by 
    a ratio of 1.5:1.






# Filters

> _Syntax:_ field-name:("value1" "value2" ... "value n")
>           field-name-1:("value1") AND field-name-2:("value2" "value3")
> _Example:_ fq=news_desk:("Sports" "Foreign")
            fq=news_desk:("Sports") AND glocations:("NEW YORK CITY")

## Return Value:
    Filters narrow your results to the specifications provided.
    Note that the default connector for values in parentheses is OR. If you declare an explicit boolean
    value, it **must** be capitalized.

## Options
    See the appendix for a list of fields.

## Pagination
    The API returns a maximum of 10 responses at a time. Use the page query parameter
    to paginate through results. You can paginate through up to 100 pages. If you get
    too many results try filtering the date range.


# Facet fields:
 
> _Syntax:_ facet_fields=day_of_week&facet=true
> _Example:_ q=obama&facet_fields=source&facet=true&begin_date=20120101&end_date=20121231
  
##  Return Value:
    Facets returns an array at the end of the JSON response that spells out the number of hits in each 
    category specified.
    Note that Facets do not take filters into account!

## Options
    The following fields can be used as facet fields:
        day_of_week, 
        document_type, 
        ingredients, 
        news_desk, 
        pub_month, 
        pub_year, 
        section_name, 
        source, 
        subsection_name, and 
        type_of_material.




# Appendix

## Filter Fields
Field	                    Behavior
---------------             ---------------------------
body	                    Multiple tokens
body.search	                Left-edge n-grams
creative_works	            Single token
creative_works.             contains Multiple tokens
day_of_week	                Single token
document_type	            Case-sensitive exact match
glocations	                Single token
glocations.                 contains Multiple tokens
headline	                Multiple tokens
headline.search	            Left-edge n-grams
kicker	                    Single token
kicker.contains	            Multiple tokens
news_desk	                Single token
news_desk.                  contains Multiple tokens
organizations	            Single token
organizations.              contains Multiple tokens
persons	                    Single token
persons.contains	        Multiple tokens
pub_date	                Timestamp (YYYY-MM-DD)
pub_year	                Integer
secpg	                    Multiple tokens
source	                    Single token
source.                     contains Multiple tokens
subject	                    Single token
subject.                    contains Multiple tokens
section_name	            Single token
section_name.               contains Multiple tokens
type_of_material	        Single token
type_of_material.           contains Multiple tokens
web_url	                    Single token (case-sensitive)
word_count	                Integer

## News Desk Values
    Adventure Sports
    Arts & Leisure
    Arts
    Automobiles
    Blogs
    Books
    Booming
    Business Day
    Business
    Cars
    Circuits
    Classifieds
    Connecticut
    Crosswords & Games
    Culture
    DealBook
    Dining
    Editorial
    Education
    Energy
    Entrepreneurs
    Environment
    Escapes
    Fashion & Style
    Fashion
    Favorites
    Financial
    Flight
    Food
    Foreign
    Generations
    Giving
    Global Home
    Health & Fitness
    Health
    Home & Garden
    Home
    Jobs
    Key
    Letters
    Long Island
    Magazine
    Market Place
    Media
    Men's Health
    Metro
    Metropolitan
    Movies
    Museums
    National
    Nesting
    Obits
    Obituaries
    Obituary
    OpEd
    Opinion
    Outlook
    Personal Investing
    Personal Tech
    Play
    Politics
    Regionals
    Retail
    Retirement
    Science
    Small Business
    Society
    Sports
    Style
    Sunday Business
    Sunday Review
    Sunday Styles
    T Magazine
    T Style
    Technology
    Teens
    Television
    The Arts
    The Business of Green
    The City Desk
    The City
    The Marathon
    The Millennium
    The Natural World
    The Upshot
    The Weekend
    The Year in Pictures
    Theater
    Then & Now
    Thursday Styles
    Times Topics
    Travel
    U.S.
    Universal
    Upshot
    UrbanEye
    Vacation
    Washington
    Wealth
    Weather
    Week in Review
    Week
    Weekend
    Westchester
    Wireless Living
    Women's Health
    Working
    Workplace
    World
    Your Money

## Section Name Values
    Arts
    Automobiles
    Autos
    Blogs
    Books
    Booming
    Business
    Business Day
    Corrections
    Crosswords & Games
    Crosswords/Games
    Dining & Wine
    Dining and Wine
    Editors' Notes
    Education
    Fashion & Style
    Food
    Front Page
    Giving
    Global Home
    Great Homes & Destinations
    Great Homes and Destinations
    Health
    Home & Garden
    Home and Garden
    International Home
    Job Market
    Learning
    Magazine
    Movies
    Multimedia
    Multimedia/Photos
    N.Y. / Region
    N.Y./Region
    NYRegion
    NYT Now
    National
    New York
    New York and Region
    Obituaries
    Olympics
    Open
    Opinion
    Paid Death Notices
    Public Editor
    Real Estate
    Science
    Sports
    Style
    Sunday Magazine
    Sunday Review
    T Magazine
    T:Style
    Technology
    The Public Editor
    The Upshot
    Theater
    Times Topics
    TimesMachine
    Today's Headlines
    Topics
    Travel
    U.S.
    Universal
    UrbanEye
    Washington
    Week in Review
    World
    Your Money

## Type of Material Values
    Addendum
    An Analysis
    An Appraisal
    Article
    Banner
    Biography
    Birth Notice
    Blog
    Brief
    Caption
    Chronology
    Column
    Correction
    Economic Analysis
    Editorial
    Editorial Cartoon
    Editors' Note
    First Chapter
    Front Page
    Glossary
    Interactive Feature
    Interactive Graphic
    Interview
    Letter
    List
    Marriage Announcement
    Military Analysis
    News
    News Analysis
    Newsletter
    Obituary
    Obituary (Obit)
    Op-Ed
    Paid Death Notice
    Postscript
    Premium
    Question
    Quote
    Recipe
    Review
    Schedule
    SectionFront
    Series
    Slideshow
    Special Report
    Statistics
    Summary
    Text
    Video
    Web Log