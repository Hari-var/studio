import {
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
  } from 'recharts';
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
  } from '@/components/ui/card';
  import { Button } from '@/components/ui/button';
  import { Checkbox } from '@/components/ui/checkbox';
  import { Input } from '@/components/ui/input';
  import { Label } from '@/components/ui/label';
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from '@/components/ui/select';
  import { Textarea } from '@/components/ui/textarea';
  import {
    ArrowUpDown,
    Download,
    ListFilter,
    RefreshCw,
    Trash2,
  } from 'lucide-react';
  
  const requirementsData = [
    { name: 'Attending P...', value: 32 },
    { name: 'Blood Profile &amp; Urine Speci...', value: 41 },
    { name: 'Examination By Medical Doctor (MD)', value: 42 },
    { name: 'Financial / Credit Check', value: 2 },
    { name: 'Motor Vehicle Report', value: 1 },
  ];
  
  const productTypeData = [
    { name: 'Term', value: 6 },
    { name: 'Universal Life', value: 10 },
    { name: 'Variable Universal Life', value: 16 },
    { name: 'Whole Life', value: 9 },
  ];
  const productTypeColors = ['#003f5c', '#58508d', '#bc5090', '#ff6361'];
  
  const caseStatusData = [
    { name: 'Pending', value: 18 },
    { name: 'Initial Review', value: 18 },
    { name: 'Completed', value: 5 },
  ];
  
  export function Dashboard() {
    return (
      <div className="bg-background text-foreground p-4 sm:p-6 lg:p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Edit Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline">BASIC</Button>
            <Button>DONE EDITING</Button>
          </div>
        </div>
  
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar */}
          <div className="w-full lg:w-1/4 xl:w-1/5 space-y-6">
            <Card>
              <CardContent className="p-4 space-y-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    defaultValue="Underwriting Team Dashboard"
                    className="mt-1"
                  />
                  <p className="text-xs text-muted-foreground text-right">27/255</p>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    className="mt-1"
                    rows={4}
                  />
                  <p className="text-xs text-muted-foreground text-right">
                    0/1000
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Page Filters</h3>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="show-search" />
                    <Label htmlFor="show-search">Show search button</Label>
                  </div>
                  <Button variant="outline" className="w-full mt-2">
                    + ADD FILTERS
                  </Button>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Actions</h3>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="display-icon" />
                    <Label htmlFor="display-icon">Display with icon</Label>
                  </div>
                  <Button variant="outline" className="w-full mt-2">
                    + ADD ACTIONS
                  </Button>
                </div>
                <div>
                  <Label htmlFor="visibility">Visibility *</Label>
                  <Select defaultValue="public">
                    <SelectTrigger id="visibility" className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="tags">Tags</Label>
                  <Input id="tags" className="mt-1" />
                </div>
              </CardContent>
            </Card>
          </div>
  
          {/* Main Content */}
          <div className="w-full lg:w-3/4 xl:w-4/5">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Requirements Received */}
              <Card className="md:col-span-2 xl:col-span-1">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center text-base font-semibold">
                    <span>Requirements Received</span>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ArrowUpDown className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <ListFilter className="h-4 w-4 mr-2" /> Bar
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ListFilter className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={requirementsData} layout="vertical" margin={{ top: 5, right: 20, left: 100, bottom: 5 }}>
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" width={100} tick={{fontSize: 12}}/>
                      <Tooltip />
                      <Bar dataKey="value" fill="hsl(var(--primary))" barSize={20} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button variant="outline">+ REPORT</Button>
                </CardFooter>
              </Card>
  
              {/* Product Type */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center text-base font-semibold">
                    <span>Product Type</span>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                       <Button variant="ghost" size="icon">
                        <ArrowUpDown className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <ListFilter className="h-4 w-4 mr-2" /> Pie
                      </Button>
                       <Button variant="ghost" size="sm">
                        <ListFilter className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={productTypeData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {productTypeData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={productTypeColors[index % productTypeColors.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend iconSize={10} wrapperStyle={{fontSize: "12px"}}/>
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
                 <CardFooter className="justify-center">
                  <Button variant="outline">+ REPORT</Button>
                </CardFooter>
              </Card>
  
              {/* Count of Cases by Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center text-base font-semibold">
                    <span>Count of Cases by Status</span>
                     <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                       <Button variant="ghost" size="icon">
                        <ArrowUpDown className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                   <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                       <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                         <ListFilter className="h-4 w-4 mr-2" /> Bar
                      </Button>
                       <Button variant="ghost" size="sm">
                        <ListFilter className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={caseStatusData} layout="vertical" margin={{ top: 5, right: 20, left: 60, bottom: 5 }}>
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" width={60} tick={{fontSize: 12}} />
                      <Tooltip />
                      <Bar dataKey="value" fill="#ff7c43" barSize={30} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
                 <CardFooter className="justify-center">
                  <Button variant="outline">+ REPORT</Button>
                </CardFooter>
              </Card>
            </div>
             <div className="mt-6 flex justify-center">
                <Button variant="outline">+ REPORT</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  